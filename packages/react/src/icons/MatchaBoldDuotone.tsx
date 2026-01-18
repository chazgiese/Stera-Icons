import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MatchaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MatchaBoldDuotone = memo(
  forwardRef<SVGSVGElement, MatchaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21.07 11.54C22.2 12.44 23 13.6 23 15c0 1.96-1.57 3.47-3.48 4.43A17 17 0 0 1 12 21a17 17 0 0 1-7.52-1.57C2.57 18.47 1 16.96 1 15c0-1.4.8-2.57 1.93-3.46q.4.95 1 1.77C3.27 13.9 3 14.49 3 15c0 .8.67 1.79 2.38 2.64C7.02 18.46 9.36 19 12 19s4.98-.54 6.62-1.36C20.32 16.8 21 15.8 21 15c0-.51-.27-1.1-.93-1.7q.6-.81 1-1.76" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 3c2.55 0 4.9.29 6.63.77.86.24 1.63.54 2.21.92.54.35 1.16.94 1.16 1.81q0 .15-.03.31l-.22 2.13A9 9 0 0 1 12.8 17h-1.6a9 9 0 0 1-8.95-8.06l-.22-2.13Q2 6.66 2 6.5c0-.87.62-1.46 1.16-1.8a8 8 0 0 1 2.2-.93C7.12 3.29 9.47 3 12 3m7.74 5.86q-.52.2-1.1.37c-1.75.48-4.1.77-6.64.77s-4.9-.29-6.63-.77q-.6-.15-1.11-.37A7 7 0 0 0 11.2 15h1.6a7 7 0 0 0 6.94-6.14M12 5c-2.42 0-4.58.27-6.1.7a6 6 0 0 0-1.83.8l.19.14q.5.34 1.64.66c1.52.43 3.68.7 6.1.7s4.58-.27 6.1-.7a6 6 0 0 0 1.83-.8l-.19-.14a6 6 0 0 0-1.64-.66A24 24 0 0 0 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaBoldDuotone.displayName = 'MatchaBoldDuotone';

// Triple export pattern (lucide-react style)
export { MatchaBoldDuotone, MatchaBoldDuotone as MatchaBoldDuotoneIcon, MatchaBoldDuotone as SiMatchaBoldDuotone };
export type { MatchaBoldDuotoneProps };
