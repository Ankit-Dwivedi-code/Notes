


//GET Homepage

exports.homepage = async(req, res)=>{
    
        const locals = {
            title: "Nodejs - NotesApp",
            description : "Free Nodejs Notes App"
        }

        res.render('index', {
            locals,
            layout:'../views/layouts/front-page'
        })
}

// GET ABOUT

exports.about = async(req, res)=>{
    
    const locals = {
        title: "About - Nodejs NotesApp",
        description : "Free Nodejs Notes App"
    }

    res.render('about', locals)
}