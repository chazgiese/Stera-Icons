import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RulerRegularProps = Omit<IconBaseProps, 'children'>;

const RulerRegular = memo(
  forwardRef<SVGSVGElement, RulerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="ruler" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.09 2.35a2 2 0 0 1 2.82 0L21.65 15.1a2 2 0 0 1 0 2.82l-3.74 3.74a2 2 0 0 1-2.82 0L2.35 8.9a2 2 0 0 1 0-2.82zm1.76 1.06a.5.5 0 0 0-.7 0L3.4 7.15a.5.5 0 0 0 0 .7l2.84 2.84 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.94 1.94 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.94 1.94 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 2.84 2.84c.2.19.5.19.7 0l3.74-3.74a.5.5 0 0 0 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulerRegular.displayName = 'RulerRegular';

// Triple export pattern (lucide-react style)
export { RulerRegular, RulerRegular as RulerRegularIcon, RulerRegular as SiRulerRegular };
export type { RulerRegularProps };
