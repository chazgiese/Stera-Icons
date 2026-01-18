import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSadBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSadBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSadBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.5c1.35 0 2.6.45 3.6 1.2a1 1 0 0 1-1.2 1.6 4 4 0 0 0-4.8 0 1 1 0 0 1-1.2-1.6c1-.75 2.25-1.2 3.6-1.2M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteSadBoldDuotone.displayName = 'EmoteSadBoldDuotone';

export { EmoteSadBoldDuotone };
export type { EmoteSadBoldDuotoneProps };
