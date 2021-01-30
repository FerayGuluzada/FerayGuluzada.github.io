let sth = document.getElementById('sth');
                function time() {
                let date = new Date();
                let sec = date.getSeconds();
                let min = date.getMinutes();
                let hour = date.getHours();
                sth.textContent =
                ("0" + hour).substr(-2) + ":" + ("0" + min).substr(-2)+":"+("0"+sec).substr(-2);
                }
                setInterval(time, 900);
