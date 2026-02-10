import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandWaveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandWaveFillDuotone = memo(
  forwardRef<SVGSVGElement, HandWaveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-wave-fill-duotone" {...props}>
      <path fill="currentColor" d="M10.69 5.42c.35-.2.8-.09 1 .26l2.82 4.87q-.31.29-.63.74c-.28.42-.52.97-.56 1.62a3.7 3.7 0 0 0 .55 2.11.87.87 0 0 0 1.51-.87 2 2 0 0 1-.31-1.12q.04-.44.27-.78a3 3 0 0 1 .7-.69l.05-.03a.9.9 0 0 0 .44-.75l.02-2.6q0-.34.27-.56.2-.16.46-.16c.41 0 .73.33.73.72l.01.13.4 2.64.05.18a5.5 5.5 0 0 1-2.42 6.7 5.56 5.56 0 0 1-7.58-2.02l-2.8-4.84a.7.7 0 0 1 .26-.98c.35-.2.8-.08 1 .26l1.8 3.11a.87.87 0 0 0 1.52-.87l-3-5.19a.7.7 0 0 1 .26-.98c.35-.2.8-.08 1 .26l.4.7 2.4 4.14a.88.88 0 0 0 1.52-.88l-2.4-4.14a.7.7 0 0 1 .26-.98" opacity={.4} />
        <path fill="currentColor" d="M4.17 15.69a.9.9 0 0 1 1.14.48 8.5 8.5 0 0 0 2.36 3.13.88.88 0 0 1-1.05 1.4 10 10 0 0 1-2.93-3.87.9.9 0 0 1 .48-1.14" />
        <path fill="currentColor" fillRule="evenodd" d="M9.82 3.9a2.5 2.5 0 0 1 3.38.9l1.66 2.86a2.47 2.47 0 0 1 4.9.43l.38 2.52a7.24 7.24 0 0 1-3.22 8.73c-3.49 2-7.94.82-9.96-2.65l-2.8-4.84a2.47 2.47 0 0 1 1.58-3.64l-.01-.03a2.47 2.47 0 0 1 3.23-3.46q.31-.5.86-.82m1.87 1.78a.73.73 0 0 0-1-.26.7.7 0 0 0-.27.98l2.4 4.14a.88.88 0 0 1-1.5.88L8.9 7.28l-.4-.7a.74.74 0 0 0-1-.26.7.7 0 0 0-.27.98l3.01 5.19a.87.87 0 1 1-1.51.87l-1.8-3.1a.73.73 0 0 0-1-.27.7.7 0 0 0-.27.98l2.8 4.84a5.56 5.56 0 0 0 7.58 2.02 5.5 5.5 0 0 0 2.37-6.88l-.4-2.64v-.13c0-.4-.33-.72-.74-.72a.73.73 0 0 0-.73.72l-.02 2.6c0 .3-.17.6-.44.75l-.05.03a3 3 0 0 0-.7.7q-.23.33-.27.77c-.02.27.04.65.31 1.12a.87.87 0 0 1-1.51.87 3.7 3.7 0 0 1-.55-2.1c.04-.66.28-1.21.56-1.63q.31-.45.63-.74z" clipRule="evenodd" />
        <path fill="currentColor" d="M18.67 2.86c1.17 0 2.14.59 2.8 1.32.66.71 1.1 1.67 1.1 2.58a.88.88 0 0 1-1.75 0c0-.38-.21-.94-.64-1.4a2 2 0 0 0-1.5-.75.88.88 0 0 1 0-1.75" />
    </IconBase>
  ))
);

HandWaveFillDuotone.displayName = 'HandWaveFillDuotone';

// Triple export pattern (lucide-react style)
export { HandWaveFillDuotone, HandWaveFillDuotone as HandWaveFillDuotoneIcon, HandWaveFillDuotone as SiHandWaveFillDuotone };
export default HandWaveFillDuotone;
export type { HandWaveFillDuotoneProps };
