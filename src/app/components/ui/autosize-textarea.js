'use client';
import * as React from 'react';
import { useImperativeHandle } from 'react';

// Custom hook for autosizing the textarea
export const useAutosizeTextArea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
}) => {
  const [init, setInit] = React.useState(true);

  React.useEffect(() => {
    const offsetBorder = 2; // Offset for border
    const textAreaElement = textAreaRef.current;

    if (textAreaElement) {
      // Initialize min and max heights
      if (init) {
        textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textAreaElement.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }

      // Reset height to min height
      textAreaElement.style.height = `${minHeight + offsetBorder}px`;
      const scrollHeight = textAreaElement.scrollHeight;

      // Adjust height based on content
      if (scrollHeight > maxHeight) {
        textAreaElement.style.height = `${maxHeight}px`;
      } else {
        textAreaElement.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [textAreaRef.current, triggerAutoSize, minHeight, maxHeight, init]);
};

// AutosizeTextarea component
export const AutosizeTextarea = React.forwardRef(
  ({ maxHeight = Number.MAX_SAFE_INTEGER, minHeight = 52, onChange, value, ...props }, ref) => {
    const textAreaRef = React.useRef(null);
    const [triggerAutoSize, setTriggerAutoSize] = React.useState('');

    // Use the custom hook
    useAutosizeTextArea({
      textAreaRef,
      triggerAutoSize,
      maxHeight,
      minHeight,
    });

    useImperativeHandle(ref, () => ({
      textArea: textAreaRef.current,
      focus: () => textAreaRef.current?.focus(),
      maxHeight,
      minHeight,
    }));

    React.useEffect(() => {
      setTriggerAutoSize(value);
    }, [value, props.defaultValue]);

    return (
      <textarea
        {...props}
        value={value}
        ref={textAreaRef}
        onChange={(e) => {
          setTriggerAutoSize(e.target.value);
          onChange?.(e);
        }}
      />
    );
  }
);

AutosizeTextarea.displayName = 'AutosizeTextarea';
