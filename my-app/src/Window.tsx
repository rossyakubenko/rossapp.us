
import './body.css'





export default function Window(props:any) {
    return (
      <div className="window">
        <h3>{props.name}</h3>
        <div className="info-group">
          {[
            { image: props.tool1, text: props.tool1text },
            { image: props.tool2, text: props.tool2text },
            { image: props.tool3, text: props.tool3text },
            { image: props.tool4, text: props.tool4text },
          ].filter((tool) => tool.image && tool.text).map((tool, index) => (
            <div key={index} className="all-tools">
              <img className="window-tool" src={tool.image} />
              <span>{tool.text}</span>
            </div>
          ))}
        </div>
        <div className="info-group">
          
        </div>
      </div>
    );
  }

 
