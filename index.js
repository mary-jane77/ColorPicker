/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

async function getColors() {
    let response = await fetch("https://api.noopschallenge.com/hexbot")
    let data = response.json()
}
