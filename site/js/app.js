$( document ).ready(function() {
    //NAVBAR
    $.get( "/api/check-logged-in", function( data ) {
        //Not logged in
        if(data == "false")
        {
            $('#nav-create-event').hide();
            $('#nav-account').hide();
            $('#nav-sign-out').hide();
        }
        else
        {
            $('#nav-sign-in').hide();
        }
    });
    
});

function simpleForm(query,url)
{
    $(query).submit(function( event ) {

        $.ajax({
            type: "POST",
            url: url,
            data: $(query).serialize(), 
            success: function(response) 
            { 
                if(response.success == true)
                    window.location.href = response.url;
                else 
                {
                    console.log(response);
                    showError(response.error);
                }
            },
        });
    
        event.preventDefault();
    });
}

function showError(content)
{
    $("#error").show(); 
    $("#error").html(content);
}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}