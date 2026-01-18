import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrainCircuitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.69 15.25c.27 0 .52.14.65.38l.99 1.7q-.76.2-1.3.76l-.77-1.34h-1.51v-1.5zM17.36 12.25a3 3 0 0 0 0 1.5h-4.61v-1.5zM17.75 9c0 .41-.34.75-.75.75h-4.25v-1.5h3.5v-1.6a3 3 0 0 0 1.5 0z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.5 1.25q.72 0 1.38.23c1.46.5 1.87 2.07 1.87 3.2v14.45c0 1.08-.35 2.47-1.6 3.1q-.98.5-2.15.52a4.75 4.75 0 0 1-4.73-4.33 4.8 4.8 0 0 1-2.35-2l-.03-.04-.13-.24-.03-.05-.13-.3-.01-.03q-.06-.15-.1-.29l-.02-.04-.08-.3-.02-.08a5 5 0 0 1-.1-.65v-.07a5 5 0 0 1 0-.67v-.07a5 5 0 0 1 .2-1v-.03l.1-.3.05-.1.09-.2.03-.07.15-.27.05-.08.34-.5.08-.09.1-.12.26-.27q.03 0 .04-.04A4.23 4.23 0 0 1 5.4 4.4v-.02q.1-.32.23-.63v-.02l.15-.3.02-.01q.15-.29.35-.53l.03-.05.2-.22.03-.04.03-.03.02-.02.19-.18.06-.06.09-.07.07-.06.04-.03.21-.15.04-.03.02-.01.11-.07.04-.03.14-.07.1-.06.08-.04.1-.04.05-.03h.03l.02-.02.14-.05.04-.02.07-.02.05-.02.04-.01.05-.02.17-.05h.03l.38-.09h.07l.12-.02.1-.01.13-.01h.04zm0 1.5a2.75 2.75 0 0 0-2.64 3.54.75.75 0 0 1-1.43.42 4 4 0 0 1-.14-.68 2.75 2.75 0 0 0-1.27 3.65l.2-.08a.75.75 0 0 1 .56 1.39 3.25 3.25 0 0 0-1.93 3.81l.02.06a3.25 3.25 0 0 0 3.95 2.29.75.75 0 0 1 .37 1.45q-.57.15-1.19.15h-.16a3.25 3.25 0 0 0 4.63 2.15c.5-.25.78-.9.78-1.77V4.68c0-.95-.35-1.6-.86-1.78q-.42-.15-.89-.15M17 17.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M20 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M17 1.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainCircuitRegularDuotone.displayName = 'BrainCircuitRegularDuotone';

// Triple export pattern (lucide-react style)
export { BrainCircuitRegularDuotone, BrainCircuitRegularDuotone as BrainCircuitRegularDuotoneIcon, BrainCircuitRegularDuotone as SiBrainCircuitRegularDuotone };
export type { BrainCircuitRegularDuotoneProps };
