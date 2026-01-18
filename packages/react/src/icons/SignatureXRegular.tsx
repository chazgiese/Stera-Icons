import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignatureXRegularProps = Omit<IconBaseProps, 'children'>;

const SignatureXRegular = memo(
  forwardRef<SVGSVGElement, SignatureXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 3.25q1.17 0 1.96.67c.51.44.82 1.05.97 1.71.31 1.3.12 2.98-.33 4.71-.3 1.13-.7 2.33-1.2 3.52q.54.07 1.27-.26a5 5 0 0 0 1.48-.98c.36-.37.7-.87 1.2-1.78a.75.75 0 0 1 1.4.35c0 .7.07 1.72.28 2.53q.15.6.35.9.09.12.12.13c.08 0 .3-.06.66-.3a7 7 0 0 0 1.14-.94c.8-.8 1.58-1.83 2.04-2.67a.75.75 0 0 1 1.32.71c-.54 1-1.41 2.13-2.3 3.02q-.69.69-1.38 1.15c-.44.28-.96.53-1.48.53-.64 0-1.09-.4-1.36-.8-.27-.39-.45-.88-.57-1.36q-.08-.33-.13-.65l-.22.23c-.52.54-1.11.89-1.89 1.27a3.7 3.7 0 0 1-2.56.33q-.5 1.02-1.03 1.98H22a.75.75 0 0 1 0 1.5H8.83q-.62.94-1.25 1.72a.75.75 0 0 1-1.16-.94q.3-.37.59-.78H2a.75.75 0 0 1 0-1.5h6q.76-1.25 1.42-2.64l-.34-.28A8 8 0 0 1 6.9 10.3a9 9 0 0 1 0-4.55c.2-.68.55-1.3 1.08-1.76A3 3 0 0 1 10 3.25m0 1.5q-.66.01-1.03.36-.4.36-.64 1.09c-.32 1-.3 2.38.03 3.74a6.7 6.7 0 0 0 1.7 3.24q.67-1.65 1.09-3.21c.43-1.66.55-3.05.32-3.99a1.7 1.7 0 0 0-.49-.93c-.2-.17-.5-.3-.98-.3" clipRule="evenodd" />
        <path fill="currentColor" d="M4.47 11.47a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97z" />
    </IconBase>
  ))
);

SignatureXRegular.displayName = 'SignatureXRegular';

export { SignatureXRegular };
export type { SignatureXRegularProps };
