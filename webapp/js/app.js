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
			}, function (result) {
				let tmpl = '<tr><td>' + title + '</td><td>' + price + '</td><td>' + '<button id="btn_delete" onClick="removeData(this)" class="btn btn-danger" data-id="' + result.data._id + '">Delete</button>' + '</td></tr>';
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
						'</td>' + '<td>' + '<button id="btn_delete" onClick="removeData(this)" class="btn btn-danger" data-id="' + bill._id + '">Delete</button>' + '</td></tr>';
					$('#table tbody').append(tmpl);
				});
			});
		}


		$('#btn_create').click(createData);
	});


})(jQuery);

//GET Bill
function listData() {
	$.get('http://localhost:3000/bills/', function (result) {
		console.log(result);
		if(result.data.lenght == 0){
			$('#table tbody').empty();
		}
		$('#table tbody').empty();
		result.data.forEach(function (bill) {
			let tmpl = '<tr><td>' + bill.title + '</td><td>' + bill.price +
				'</td>' + '<td>' + '<button id="btn_delete" onClick="removeData(this)" class="btn btn-danger" data-id="' + bill._id + '">Delete</button>' + '</td></tr>';
			$('#table tbody').append(tmpl);
		});
	});
}

//DELETE Bill
function removeData(e) {
	let id = $(e).attr('data-id');
	$.ajax({
		type: 'DELETE',
		url: 'http://localhost:3000/bills/' + id,
		sucess: function () {
			listData();
		}
	});
	listData();
}

//Declararations
listData();