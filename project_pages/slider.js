var slides = Array.from(document.getElementsByTagName('slide'));

function check()
{
    for(var i = 0; i < slides.length; ++i)
    {
        console.log("slides[" + i + "] = " + slides[i].textContent);
    }
}

function next()
{
	playAnim(slides[0], "outFromRight");
	playAnim(slides[1], "inFromRight");

	slides.push(slides.shift());
}

function previous()
{
	playAnim(slides[0], "outFromLeft");
	playAnim(slides[slides.length - 1], "inFromLeft");

	slides.unshift(slides.pop());
}

function playAnim(element, animName)
{
	var animNames = ["inFromLeft", "outFromLeft", "inFromRight", "outFromRight"];

	// -----------------------------
	// check if args are valid
	if (element.tagName != "SLIDE")
	{
		console.log("playAnim(animName, element) Error : element not valid.");
		return;
	}

	var isAnimNameValid = false;
	for(var i = 0; i < animNames.length; i++)
	{
		if (animName == animNames[i])
		{
			isAnimNameValid = true;
			break;
		}
	}

	if(!isAnimNameValid) 
	{
		console.log("playAnim(animName, element) Error : animName not valid.");
		return;
	}

	// check if other anim is playing, if true then stop other anim
	for(var i = 0; i < animNames.length; i++)
	{
		if (element.classList.contains(animNames[i]))
		{
			element.classList.remove(animNames[i]);
		}
	}

	element.classList.add(animName);
}
