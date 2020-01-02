
function domEval(code) {
                    var script = document.createElement('script');
                    script.text = code;
                    document.head.appendChild(script);
                    script.parentNode.removeChild(script);
                }
                
function addScript(src, callback) {
                    var script = document.createElement('script');
                    script.src = src;
                    script.onload = script.onerror = function() {
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                        script = null;
                        if (callback) {
                            callback();
                            callback = null;
                        }
                    }
                    ;
                    document.head.appendChild(script);
                }
                
