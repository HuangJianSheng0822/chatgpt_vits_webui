	$("#btn").click(function(){
		$.ajax({
			type: "post",
			url: "http://localhost:8080/getVits",
			contentType: "application/json;chatset=utf-8",
			data: JSON.stringify({
				text: "好喜欢你",
				speakerId: 133,
				lang: "zh",
				length: 1.4
			}),
			success: function(data, textStatus) {
				console.log("YES")
			},
			errors: function(XMLHttpRequest, textStatus, errorThrown) {
		
			}
		
		})
	})