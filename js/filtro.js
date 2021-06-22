        // PAIS

        $(document).ready(function(){
          $("#channelSearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#channelsList div").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });

        // PAÍS

        $(document).ready(function(){
          $("#countrySearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#countryList div").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });

        // CATEGORIA

        $(document).ready(function(){
          $("#categorySearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#categoryList div").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });