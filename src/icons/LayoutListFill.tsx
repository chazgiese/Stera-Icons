import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListFillProps = Omit<IconBaseProps, 'children'>;

const LayoutListFill = memo(
  forwardRef<SVGSVGElement, LayoutListFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-list-fill" {...props}>
      <path fill="currentColor" d="M7.05 12.88q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-.35q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM20.5 18.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 13.75a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM7.05 2.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38V6.7q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM20.5 8.25a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 3.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

LayoutListFill.displayName = 'LayoutListFill';

// Triple export pattern (lucide-react style)
export { LayoutListFill, LayoutListFill as LayoutListFillIcon, LayoutListFill as SiLayoutListFill };
export default LayoutListFill;
export type { LayoutListFillProps };
