<!DOCTYPE :html>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>


    <!-- chart.js 파일  -->
    <script src="./chart/Chart.js/Chart.js"></script>
    <script src="./chart/Chart.js/Chart.min.js"></script>
    <link rel="stylesheet" href="./chart/Chart.js/Chart.css">
    <link rel="stylesheet" href="./chart/Chart.js/Chart.min.css">
   
    <head>
    <meta charset='UTF-8'>
    <title></title>
        <style>
        </style>
    </head>
    <!-- <body style="width:98%;"> -->
        <body>
        <canvas id="myChart"></canvas>
    </body>
    <script type="text/javascript">
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type : "bar",
        data : {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"] << 차트에 쓰이는 라벨들
            , datasets : [{
                  label: "#BarChart" >>차트에 쓰이는 라벨
                , data: [12, 19, 3, 5, 2, 3] >> 차트의 데이터들
                , backgroundColor : [
                      "rgba(255, 99, 132, 0.2)"   //차트의 배경색
                    , "rgba(54, 162, 235, 0.2)"
                    , "rgba(255, 206, 86, 0.2)"
                    , "rgba(75, 192, 192, 0.2)"
                    , "rgba(153, 102, 255, 0.2)"
                    , "rgba(255, 159, 64, 0.2)"
                ]
                , borderColor: [
                      "rgba(255, 99, 132, 1)" // 차트의 태두리 색
                    , "rgba(54, 162, 235, 1)"
                    , "rgba(255, 206, 86, 1)"
                    , "rgba(75, 192, 192, 1)"
                    , "rgba(153, 102, 255, 1)"
                    , "rgba(255, 159, 64, 1)"
                ]
                , borderWidth : 1  // 차트 테두리 두께
            }]
        }
        , options : { /// 추가할 옵션설정시 추가
            scales : {
                yAxes : [{  <<< y축 옵션 설정 
                    ticks : { beginAtZero : true }
                }]
            }
        }
    });
    </script>
</html>
