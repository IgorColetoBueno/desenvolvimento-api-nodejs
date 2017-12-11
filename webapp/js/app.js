(function ($) {
	$(document).ready(function () {
		console.log('Teste', $);
		//POST from bill
		const createData = function () {
			let title = $('input[name="title"]').val();
			let price = $('input[name="price"]').val();

			if (title.trim() === '' || price.trim() === '') {
				alert('Invalid body!');
				return;
			}

			$.post('http://localhost:3000/bills/', {
				'title': title,
				'price': price
			}, function () {
				let tmpl = '<tr><td>' + title + '</td><td>' + price + '</td></tr>';
				$('#table tbody').append(tmpl);
				$('input[name="title"]').val('');
				$('input[name="price"]').val('');
			});
		};
		//GET Bill
		const listData = function () {
			$.get('http://localhost:3000/bills/', function (result) {
				if (!result.data.lenght && !result.status) {
					return;
				}
				$('#table tbody').empty();
				result.data.forEach(function (bill) {
					let tmpl = '<tr><td>' + bill.title + '</td><td>' + bill.price +
						'</td>' + '<td>' + '<button id="btn_delete" class="btn btn-danger" data-id="' + bill._id + '">Delete</button>' + '</td></tr>';
					$('#table tbody').append(tmpl);
				});
			});
		}
		//DELETE Bill
		const removeData = function () {
			let id = $(this).data(id);

			$.ajax({
				url: 'http://localhost:3000/bills/' + id,
				type: 'DELETE',
				sucess: function (result) {
					//$('#list_table tbody tr td #btn_delete[data-id="'+id+']').remove();
						listData()
				}
			})
		}
		//Declararations
		listData();
		$('#btn_create').click(createData);
		$('#btn_delete').click(removeData);
	});

})(jQuery);