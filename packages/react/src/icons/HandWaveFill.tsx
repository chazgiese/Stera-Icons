import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandWaveFillProps = Omit<IconBaseProps, 'children'>;

const HandWaveFill = memo(
  forwardRef<SVGSVGElement, HandWaveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2.63 16.07a1 1 0 0 1 1.3.56c.3.74 1.27 2.52 2.67 3.57a1 1 0 1 1-1.2 1.6 11.4 11.4 0 0 1-3.33-4.43 1 1 0 0 1 .56-1.3M9.52 2.24c.85-.5 1.94-.2 2.43.64l4.26 7.34a5 5 0 0 0-1.22 1.28c-.34.5-.62 1.15-.66 1.9-.05.76.13 1.6.66 2.52a.47.47 0 1 0 .8-.47 3.5 3.5 0 0 1-.54-1.99c.04-.56.24-1.04.51-1.44a4 4 0 0 1 1.18-1.18l.1-.06.02-.01a.5.5 0 0 0 .23-.4l.04-3.61a1.75 1.75 0 0 1 1.77-1.77 1.77 1.77 0 0 1 1.78 1.83l.56 3.69.02.1a8.4 8.4 0 0 1-3.7 10.26 8.5 8.5 0 0 1-11.6-3.1l-3.92-6.74c-.5-.84-.2-1.92.65-2.41.8-.46 1.8-.23 2.32.5l.1.15 2.52 4.33a.47.47 0 0 0 .8-.46L4.43 5.9c-.48-.85-.2-1.92.65-2.41s1.94-.2 2.43.65l3.92 6.75a.47.47 0 0 0 .8-.47L8.87 4.64c-.48-.84-.2-1.92.65-2.4M19.5 1.5c1.35 0 2.47.67 3.24 1.51A4.6 4.6 0 0 1 24 6a1 1 0 0 1-2 0c0-.45-.24-1.1-.74-1.64a2.4 2.4 0 0 0-1.76-.86 1 1 0 0 1 0-2" />
    </IconBase>
  ))
);

HandWaveFill.displayName = 'HandWaveFill';

export { HandWaveFill };
export type { HandWaveFillProps };
