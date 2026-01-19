import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrewdriverFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrewdriverFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="screwdriver-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.16 3.35a4.6 4.6 0 0 1 6.5 6.5l-3.82 3.8a1 1 0 0 1-.7.3h-.88L15 15.26a1 1 0 0 1-.28.52l-1.7 1.7a1 1 0 0 1-1.4 0l-5.1-5.1a1 1 0 0 1 0-1.4l1.7-1.7.12-.1a1 1 0 0 1 .4-.18l1.31-.26v-.87a1 1 0 0 1 .3-.71zm3.95 2.54a1 1 0 0 0-1.41 0l-2.54 2.54a1 1 0 1 0 1.41 1.41l2.54-2.54a1 1 0 0 0 0-1.41" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.78 15.64 3.7 21.7a1 1 0 0 1-1.42-1.42l6.07-6.07zM16.7 5.89A1 1 0 0 1 18.1 7.3l-2.54 2.54a1 1 0 0 1-1.41-1.41z" />
    </IconBase>
  ))
);

ScrewdriverFillDuotone.displayName = 'ScrewdriverFillDuotone';

// Triple export pattern (lucide-react style)
export { ScrewdriverFillDuotone, ScrewdriverFillDuotone as ScrewdriverFillDuotoneIcon, ScrewdriverFillDuotone as SiScrewdriverFillDuotone };
export type { ScrewdriverFillDuotoneProps };
