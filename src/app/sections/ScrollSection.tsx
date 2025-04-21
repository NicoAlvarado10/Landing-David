const words = ["impredecible", "cambiante", "extravagante"];
const duplicatedWords = [...words, ...words];

export const ScrollSection = () => {
  return (
    <section className="infinite-wrapper">
      <div className="scroll-tracking">
        {duplicatedWords.map((word, index) => (
          <div className="flex items-center" key={index}> {/* Agregando key */}
            <span className="word tracking-widest">
              {word.toUpperCase()}
            </span>
            {index !== duplicatedWords.length - 1 && (
              <span className="separator">
                •
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
