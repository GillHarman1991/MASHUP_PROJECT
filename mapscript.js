var map1,map2,map3;
function initialize(){
    var mapOptions1={
        zoom:2,
        center:
        {
            lat:40.758904,lng:-73.985128
        }
    };
        var mapOptions2={
            zoom:10,
            center:
            {
                lat:40.758904,lng:-73.985128
            }};
            var mapOptions2={
                zoom:10,
                center:
                {
                    lat:40.758904,lng:-73.985128
                }};
            map1=new google.maps.Map(document.getElementById('mao_canvas1'),mapOprions1);
            map2=new google.maps.Map(document.getElementById('mao_canvas2'),mapOprions2);
            map3=new google.maps.Map(document.getElementById('mao_canvas3'),mapOprions3);
            
}google.maps.event.addDomListener(window,'load',initialize);
