//resize thumbnails
    const sizeUnit = 100; //width
    let thumbContainers = document.getElementsByClassName('thumb-container');

    console.log($(thumbContainers).attr('size'));
    // $(thumbContainers).each(function(e){
    //     let width = e.attr('size') * sizeUnit;
    //     console.log(e.attr('size'));
    //     let height = sizeUnit  + 'px';
    //     e.style('width', width);
    //     e.style('height', height);
    //  });