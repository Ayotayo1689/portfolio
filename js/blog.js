    // Position to show data
    const blogPos = document.querySelector("#blog");

    // Dev.to username and api
    const username = "somtookaforr";
    const api = "https://dev.to/api/articles?";

    // Helper function
    // Create elements
    function createNode(element) {
    return document.createElement(element);
    }

    // function append element
    function append(pareantEl, childEl) {
    return pareantEl.appendChild(childEl);
    }

    const ul = createNode('ul');
    ul.classList.add("blog-feed");

    const finalURL = buildURL(username);
    // console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then(posts => {
        //console.log(posts)
            // limiting no of post shown
            posts.length = 3;
            //console.log(posts)
        
            posts.forEach((post) => {
            // creating node elements
            let li = createNode('li'), a = createNode('a');
            let h5 = createNode('h5'), p = createNode('p');
            let h6 = createNode('h6'), img = createNode('img');
            
            // specifying value, attributes and className
            a.target = "_blank";
            p.classList.add("w-info");
            a.href = post.url;
            a.innerText = post.title;
            p.innerText = post.description;
            img.src = post.cover_image;
            img.alt = "cover_image";
            // Reaction count
            h6.innerText = '❤️' + post.public_reactions_count;
            //appending 
            append(h5, a);
            append(li, h5);
            append(li, img);
            append(li, p);
            append(li, h6);
            append(ul, li);
            })
            // appending to blog post to feed
            append(blogPos, ul);
    })
    // build url
    function buildURL(userName) {
    return `${api}username=${userName}`;
    }
