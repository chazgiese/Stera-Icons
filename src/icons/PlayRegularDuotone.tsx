import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlayRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-duotone" {...props}>
      <path fill="currentColor" d="M4.18 3.85c-.17.23-.3.6-.36 1.34-.07.73-.07 1.7-.07 3.08v7.46c0 1.37 0 2.35.07 3.08.07.74.2 1.11.36 1.34l-.61.44-.6.44a4 4 0 0 1-.65-2.08q-.09-1.22-.07-3.22V8.27q-.02-2 .07-3.22a4 4 0 0 1 .64-2.08z" opacity={.4} />
        <path fill="currentColor" d="M5.6 1.44a4 4 0 0 1 2.12.48q1.1.52 2.83 1.53l6.53 3.73c1.18.68 2.11 1.2 2.8 1.69a4 4 0 0 1 1.5 1.6c.43.97.43 2.09 0 3.06a4 4 0 0 1-1.5 1.6c-.69.48-1.62 1.01-2.8 1.69l-6.53 3.73q-1.72 1-2.83 1.53a4 4 0 0 1-2.12.48 3.8 3.8 0 0 1-2.64-1.53l.61-.44.6-.44c.38.52.96.85 1.59.92.28.03.66-.05 1.34-.35.67-.31 1.52-.8 2.7-1.48l6.53-3.72c1.21-.7 2.07-1.19 2.69-1.62.61-.43.87-.72.99-.98.26-.59.26-1.25 0-1.84-.12-.26-.38-.55-1-.98-.6-.43-1.47-.93-2.68-1.62L9.81 4.75A38 38 0 0 0 7.1 3.28c-.68-.3-1.06-.38-1.34-.35-.63.07-1.2.4-1.58.92l-.61-.44-.6-.44A3.8 3.8 0 0 1 5.6 1.44" />
    </IconBase>
  ))
);

PlayRegularDuotone.displayName = 'PlayRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlayRegularDuotone, PlayRegularDuotone as PlayRegularDuotoneIcon, PlayRegularDuotone as SiPlayRegularDuotone };
export default PlayRegularDuotone;
export type { PlayRegularDuotoneProps };
