export default function GlobalStyles() {
    return (
        <style jsx global>
            {`
            .container {
                display: flex;
                flex-direction: column;
                height: 100%;
                align-content: center;
            }
            .body {
                align-item:center;
                background: #efe;                  
                display: flex;
                height: 100%;
                flex-direction: column;
                padding: 0 20px;
            }
            h2 {          
                width: auto;
                margin: 10 100px;
                color: blue;
                padding: 10px;
                align-self: center;

            }
            a {
                padding: 10px;
                margin: 10px;
                color: green;
            }
            .navbar {
                width: 100%;
                background: #111;
                display: inline-flex;
                align-items: center;
                justify-content: space-around;
                margin: 0;
                padding: 0;
              }
            .navbar a {
                color: #fff;
                text-decoration: none;
              }
            .navbar a:hover {
                color: #111;                
                background: #eef;
                text-decoration: none;
              }
      
            .navbar a.selected {
                color: #0070f3;
                text-shadow: 0px 0px 1px #0070f3;
              }
      
            .navbar a:first-child {
                display: flex;
                margin: 0;
              }
            .getstart {
                justify-content: space-around;
                margin: 10px 50px;
            }
            p{
                color: black;
                font-size:20px;
            }
            .button {
                background: #aac;
                color: white;
                text-decoration: none;
                padding: 20px;
                text-align: center;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 12px;
            }
            .button a{
                color: red;
                background: #fff;
                width: 50px;

            }
            .link-list-div{
                disply: flex;
                flex-dirrection: row;
                justify-content: space-between;
                align-self: center;
                              
            }
            .link-list-div a{
                margin: 100px;
                text-decoration: none;
                              
            }
            .link-list-div a:hover{
                background: #ddd;
                margin: 100px;
                text-decoration: none;
                              
            }
            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-row-gap: 2rem;
            }
            .fw5 {
                font-weight: 500;
            }
          `}
        </style>
    )
}