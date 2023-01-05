import React, { useState, useCallback, useMemo, useRef } from 'react';
import type { FC, ChangeEvent, MouseEvent, CSSProperties } from 'react';

export interface IContainerProps {
  visible: boolean;
  callback: () => void;
  style: CSSProperties;
}

export const Container: FC<IContainerProps> = ({
  visible = false,
  callback = () => {},
  style = {}
}: IContainerProps) => {
  const [v, setV] = useState('');
  const [submitted, setSubmitted] = useState<boolean>();

  const domRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<number>(599);

  const operateRef = () => {
    domRef.current?.getBoundingClientRect();
    valueRef.current += 1;
  };

  const handler1 = useCallback((input: number) => {
    return input > 10;
  }, []);

  const handler2 = useCallback<(input: number, compare: boolean) => boolean>((input: number) => {
    return input > 10;
  }, []);

  const result1 = useMemo(() => {
    return 'some-expensive-process';
  }, []);

  const result2 = useMemo<{ name?: string }>(() => {
    return {};
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setV(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSubmitted(true);
    callback && callback();
  };

  return (
    <div className='container' style={style} ref={domRef}>
      <input value={v} onChange={handleChange} />
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
