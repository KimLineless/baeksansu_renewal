$('body').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });

  $(function () {
    $("section").mouseover(function(){
      document.getElementById("txt1").innerHTML = "닌자게임 Play";
      document.getElementById("txt2").innerHTML = "제네시스부티크 리뉴얼";
      document.getElementById("txt3").innerHTML = "경주문화재단 리뉴얼";
      document.getElementById("txt4").innerHTML = "청정원 리뉴얼";
    })
    $("section").mouseout(function(){
      document.getElementById("txt1").innerHTML = "Welcome";
      document.getElementById("txt2").innerHTML = "Museon's Website";
      document.getElementById("txt3").innerHTML = "";
      document.getElementById("txt4").innerHTML = "";
    })


  })