

class Typist {

    static start(elementClass, strings, speed) {
        const SEPARATOR = ['\'', '.', ','];

        let self = this;
        let stringsArr = Array.from(strings);



        document.querySelectorAll(elementClass).forEach( async(el, key, parent) => {
            
            let strCounter = 0;
            let characterCounter = 0;


            
            for (let i = 0; i < stringsArr.length; ++i) {

                let cCounter = 0;
                let currStr = stringsArr[i];

                (await function() {
                    function type() {
                        if (cCounter < currStr.length) {
                            el.innerText += currStr[cCounter];
                            ++cCounter;
                            setTimeout(type, speed);
                        }
                        else {
                            el.innerText += '\n';
                        }
                    }
                    type();
                })();

            }

        });
    }

}




