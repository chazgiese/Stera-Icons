import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelBoldProps = Omit<IconBaseProps, 'children'>;

const LabelBold = memo(
  forwardRef<SVGSVGElement, LabelBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8.22a5 5 0 0 1-4.24-2.35L.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 8.22 3zM8.22 5a3 3 0 0 0-2.55 1.41l-3.16 5.06a1 1 0 0 0 0 1.06l3.16 5.06A3 3 0 0 0 8.22 19H18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelBold.displayName = 'LabelBold';

// Triple export pattern (lucide-react style)
export { LabelBold, LabelBold as LabelBoldIcon, LabelBold as SiLabelBold };
export type { LabelBoldProps };
