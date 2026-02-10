import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverBoldProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverBold = memo(
  forwardRef<SVGSVGElement, ScrewdriverBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="screwdriver-bold" {...props}>
      <path fill="currentColor" d="M16.7 5.89A1 1 0 0 1 18.1 7.3l-2.54 2.54a1 1 0 1 1-1.41-1.41z" />
        <path fill="currentColor" fillRule="evenodd" d="M14.16 3.35a4.6 4.6 0 0 1 6.5 6.5l-3.82 3.8a1 1 0 0 1-.7.3h-.88L15 15.26a1 1 0 0 1-.28.52l-1.7 1.7a1 1 0 0 1-1.4 0l-1.84-1.84L3.7 21.7a1 1 0 1 1-1.42-1.42l6.07-6.07-1.83-1.83a1 1 0 0 1 0-1.42l1.7-1.7.1-.09a1 1 0 0 1 .4-.18l1.32-.26v-.87a1 1 0 0 1 .3-.71zm5.08 1.41a2.6 2.6 0 0 0-3.67 0l-3.52 3.52v1.28a1 1 0 0 1-.8.98l-1.83.37-.77.77 3.67 3.67.77-.77.37-1.83.02-.08a1 1 0 0 1 .96-.72h1.28l3.52-3.52a2.6 2.6 0 0 0 0-3.67" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverBold.displayName = 'ScrewdriverBold';

// Triple export pattern (lucide-react style)
export { ScrewdriverBold, ScrewdriverBold as ScrewdriverBoldIcon, ScrewdriverBold as SiScrewdriverBold };
export default ScrewdriverBold;
export type { ScrewdriverBoldProps };
