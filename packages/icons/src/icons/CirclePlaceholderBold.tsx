import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBold = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.52 1.6c3.15-.44 6.48.55 8.9 2.97 2.43 2.43 3.42 5.76 2.98 8.91-.22 1.52-.77 3-1.64 4.31q-.57.87-1.34 1.63-.75.77-1.63 1.34c-1.32.88-2.8 1.42-4.3 1.64-3.16.44-6.49-.55-8.92-2.98s-3.41-5.75-2.97-8.9c.22-1.52.76-3 1.64-4.31q.57-.87 1.33-1.64t1.64-1.33C7.53 2.36 9 1.82 10.5 1.6M3.57 13.04c.22 1.82 1.03 3.58 2.42 4.97 1.4 1.4 3.15 2.2 4.97 2.42zM4.3 8.4q-.44.93-.63 1.92l10.01 10.01q.99-.2 1.92-.63zM6.66 5.4q-.35.27-.67.6t-.6.67L17.34 18.6q.35-.27.67-.6t.6-.67zm3.65-1.72q-.99.2-1.9.63L19.7 15.6q.44-.93.63-1.92zm10.12 7.29c-.22-1.82-1.03-3.58-2.42-4.97-1.4-1.4-3.15-2.2-4.97-2.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBold.displayName = 'CirclePlaceholderBold';

// Triple export pattern
export { CirclePlaceholderBold, CirclePlaceholderBold as CirclePlaceholderBoldIcon, CirclePlaceholderBold as SiCirclePlaceholderBold };
export default CirclePlaceholderBold;
export type { CirclePlaceholderBoldProps };
