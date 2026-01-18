import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RulerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulerRegularDuotone = memo(
  forwardRef<SVGSVGElement, RulerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.09 2.35a2 2 0 0 1 2.82 0L21.65 15.1a2 2 0 0 1 0 2.82l-3.74 3.74a2 2 0 0 1-2.82 0L2.35 8.9a2 2 0 0 1 0-2.82zm1.76 1.06a.5.5 0 0 0-.7 0L3.4 7.15a.5.5 0 0 0 0 .7L16.15 20.6c.2.19.5.19.7 0l3.74-3.74a.5.5 0 0 0 0-.7z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.97 14.97a.75.75 0 1 1 1.06 1.06l-1.72 1.72-1.06-1.06zM10.97 11.97a.75.75 0 1 1 1.06 1.06l-1.72 1.72-1.06-1.06zM7.97 8.97a.75.75 0 1 1 1.06 1.06l-1.72 1.72-1.06-1.06z" />
    </IconBase>
  ))
);

RulerRegularDuotone.displayName = 'RulerRegularDuotone';

export { RulerRegularDuotone };
export type { RulerRegularDuotoneProps };
