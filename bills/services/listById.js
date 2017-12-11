import Bill from './../schema/Bill';

export default (req, res) => {
    Bill
        .findOne({
            _id:req.params.id
        })
        .then((bill) => {
            if (!bill) {
                return res.status(404)
                    .json({
                        status: false,
                        data: {}
                    })
            }

            return res.status(200)
                .json({
                    status: true,
                    data: bill
                })
        })
        .catch(err => status(500)
            .json({
                status: false,
                data: {}
            })
        );

}