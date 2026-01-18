import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SignatureXBoldProps = Omit<IconBaseProps, 'children'>;

const SignatureXBold = memo(
  forwardRef<SVGSVGElement, SignatureXBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 3q1.25-.01 2.13.73c.56.49.88 1.15 1.05 1.85.32 1.35.11 3.08-.34 4.82a26 26 0 0 1-1.07 3.21q.35-.03.79-.24c.71-.35 1.1-.6 1.41-.92a8 8 0 0 0 1.15-1.73 1 1 0 0 1 1.88.47c0 .7.07 1.68.27 2.47q.15.6.32.81l.04-.01q.15-.05.4-.21.5-.33 1.09-.92c.8-.79 1.55-1.79 2-2.61a1 1 0 0 1 1.76.95 14 14 0 0 1-2.35 3.08q-.7.7-1.42 1.18c-.44.28-1.01.57-1.61.57a1.9 1.9 0 0 1-1.57-.9 5 5 0 0 1-.6-1.45l-.04-.2a7 7 0 0 1-1.85 1.22q-1.26.6-2.48.4l-.05-.02q-.37.75-.75 1.45H22a1 1 0 1 1 0 2H8.96q-.58.89-1.18 1.63a1 1 0 0 1-1.56-1.26l.3-.37H2a1 1 0 1 1 0-2h5.86q.65-1.1 1.25-2.32l-.2-.17a8.4 8.4 0 0 1-2.25-4.15 9 9 0 0 1 0-4.69A4 4 0 0 1 7.8 3.8Q8.71 3 10 3m0 2c-.4 0-.66.12-.86.3q-.35.29-.58.97c-.3.95-.29 2.28.04 3.61a7 7 0 0 0 1.36 2.85q.59-1.45.95-2.83c.42-1.64.53-2.99.32-3.86-.1-.42-.26-.66-.41-.8-.15-.13-.39-.24-.82-.24" clipRule="evenodd" />
        <path fill="currentColor" d="M4.3 11.3a1 1 0 1 1 1.4 1.4l-.79.8.8.8a1 1 0 1 1-1.42 1.4l-.79-.79-.8.8a1 1 0 1 1-1.4-1.42l.79-.79-.8-.8a1 1 0 1 1 1.42-1.4l.79.79z" />
    </IconBase>
  ))
);

SignatureXBold.displayName = 'SignatureXBold';

export { SignatureXBold };
export type { SignatureXBoldProps };
