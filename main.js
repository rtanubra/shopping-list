$(function() {
    //Add function
    const adderFunction = function(shopItem) {
        let to_add = shopItem
        $("#shopping-list-entry").val("")
        console.log(shopItem)
        $(".shopping-list").append(`
        <li>
        <span class="shopping-item">${shopItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>
        `)
    }
    //event listenner to add item (button click)
    $("#js-shopping-list-form").find("button").click(function(event){
        event.preventDefault()
        adderFunction($("#shopping-list-entry").val())
    })

    //delete object
    $(".shopping-list").on("click","button.shopping-item-delete", function(event){
        $(this).parent().parent().remove()
    } )

    //check and uncheck objects
    $(".shopping-list").on("click","button.shopping-item-toggle", function(event){
        div_shopping_item_toggle = $(this).parent().prev().toggleClass("shopping-item__checked")

    })
})

