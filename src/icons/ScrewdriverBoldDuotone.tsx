import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrewdriverBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScrewdriverBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="screwdriver-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.16 3.35a4.6 4.6 0 0 1 6.5 6.5l-3.82 3.8a1 1 0 0 1-.7.3h-.88L15 15.26a1 1 0 0 1-.28.52l-1.7 1.7a1 1 0 0 1-1.4 0l-5.1-5.1a1 1 0 0 1 0-1.4l1.7-1.7.12-.1a1 1 0 0 1 .4-.18l1.31-.26v-.87a1 1 0 0 1 .3-.71zm5.08 1.41a2.6 2.6 0 0 0-3.67 0l-3.52 3.52v1.28a1 1 0 0 1-.8.98l-1.83.37-.77.77 3.67 3.67.77-.77.37-1.83a1 1 0 0 1 .98-.8h1.28l3.52-3.52a2.6 2.6 0 0 0 0-3.67" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.78 15.64 3.7 21.7a1 1 0 0 1-1.42-1.42l6.07-6.07zM16.7 5.89A1 1 0 0 1 18.1 7.3l-2.54 2.54a1 1 0 0 1-1.41-1.41z" />
    </IconBase>
  ))
);

ScrewdriverBoldDuotone.displayName = 'ScrewdriverBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScrewdriverBoldDuotone, ScrewdriverBoldDuotone as ScrewdriverBoldDuotoneIcon, ScrewdriverBoldDuotone as SiScrewdriverBoldDuotone };
export type { ScrewdriverBoldDuotoneProps };
