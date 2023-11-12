import React from 'react';

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const useHighlightText = (
  text: string,
  highlight: string,
  highlightClassName: string
): React.ReactNode => {
  return React.useMemo(() => {
    if (!highlight.trim()) {
      return text;
    }
    const escapedHighlight = escapeRegExp(highlight);
    const regex = new RegExp(`(${escapedHighlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className={highlightClassName}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }, [text, highlight, highlightClassName]);
};

export default useHighlightText;
