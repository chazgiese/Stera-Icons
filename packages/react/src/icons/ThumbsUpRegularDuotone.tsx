import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThumbsUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 2.25q1.69.02 2.61 1.02c.6.64.88 1.48.97 2.32a9 9 0 0 1-.47 3.66h2.17a2.7 2.7 0 0 1 2.69 3.06l-.13.83-.14.8c-.15.76-.5 2.04-.8 3.1l-.4 1.39-.13.42-.04.12V19h-.01a3.75 3.75 0 0 1-3.61 2.75H11.5a.75.75 0 0 1 0-1.5h4.2c1.02 0 1.91-.68 2.18-1.66v-.02l.02-.04.03-.11a106 106 0 0 0 1.3-4.77q.14-.7.25-1.55a1.2 1.2 0 0 0-1.2-1.35H15a.75.75 0 0 1-.67-1.08c.5-1.01.9-2.62.76-3.92a2.5 2.5 0 0 0-.57-1.46 1.7 1.7 0 0 0-1.1-.51l-2.78 4.86a4.2 4.2 0 0 1-3.03 2.07.75.75 0 0 1-.22-1.49A2.7 2.7 0 0 0 9.34 7.9l3-5.26a.8.8 0 0 1 .66-.38" />
        <path fill="currentColor" fillRule="evenodd" d="M7.4 9.22a.75.75 0 0 0 .2 1.49q.34-.06.65-.15V17c0 1.8 1.46 3.25 3.25 3.25a.75.75 0 0 0 0 1.5H8A4.75 4.75 0 0 1 3.25 17v-4A3.75 3.75 0 0 1 7 9.25zm-.65 1.54c-1.12.13-2 1.08-2 2.24v4c0 1.8 1.46 3.25 3.25 3.25h.04c-.8-.85-1.29-2-1.29-3.25z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ThumbsUpRegularDuotone.displayName = 'ThumbsUpRegularDuotone';

export { ThumbsUpRegularDuotone };
export type { ThumbsUpRegularDuotoneProps };
