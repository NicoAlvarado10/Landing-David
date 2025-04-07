

const words = ["impredecible", "cambiante", "extravagante"];
const duplicatedWords = [...words, ...words];
export const ScrollSection = () => {
  return (



<section className="infinite-wrapper ">
  <div className="scroll-tracking">
    {duplicatedWords.map((word, index) => (
      <>
        <span className="word tracking-widest">
          {word.toUpperCase()}
        </span>
        {(index !== duplicatedWords.length - 1) && (
          <span className="separator">
            •
          </span>
        )}
      </>
    ))}
  </div>
</section>
  )
}
