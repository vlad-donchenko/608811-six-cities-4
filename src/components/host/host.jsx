import React from "react";
import {hostType} from "../../types";

const Host = (props) => {
  const {host} = props;
  const {name, avatar, description, isPro} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div
          className={`property__avatar-wrapper user__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``}`}>
          <img className="property__avatar user__avatar" src={`img/${avatar}`} width="74" height="74" alt={name}/>
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        {description.map((text, index) => (
          <p key={`${index}-${text}`} className="property__text">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

Host.propTypes = {
  host: hostType
};

export default Host;
