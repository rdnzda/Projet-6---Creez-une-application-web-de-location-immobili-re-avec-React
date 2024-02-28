export const Tags = ({ tags }) => {
    return (
      <div className="tags">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <div>
                {tag}
            </div>
          </div>
        ))}
      </div>
    );
};