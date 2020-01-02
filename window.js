
window.copyToClipboard = function(t, e, i) {
        if (navigator.clipboard)
            navigator.clipboard.writeText(t).then(e, i);
        else {
            var n = document.createElement("textarea");
            n.value = t,
            document.body.appendChild(n),
            n.select(),
            document.execCommand("copy"),
            document.body.removeChild(n)
        }
    }
    
    window.copy = function(t) {
        try {
            return JSON.parse(JSON.stringify(t))
        } catch (e) {
            return JSON.parse(JSON.stringify(JSON.decycle(t)))
        }
    }
    
    window.arrayToOptionList = function(t, e, i) {
        return t.map((function(t) {
            return {
                value: t[e],
                label: t[i]
            }
        }
        ))
    }
    
    
