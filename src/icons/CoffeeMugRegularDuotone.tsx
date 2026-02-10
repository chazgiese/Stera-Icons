import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugRegularDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.5 5.99zc0 .63.41 1.09.82 1.38q.32.24.74.43l.29 8.03a3.16 3.16 0 0 0 2.7 3.01q2.7.39 5.4 0a3.16 3.16 0 0 0 2.7-3.02l.28-8.02q.43-.2.75-.43c.4-.29.82-.74.82-1.37v.02l-.04 1.22h.72c1.56 0 2.8 1.29 2.75 2.84l-.1 3a2.75 2.75 0 0 1-2.75 2.66h-.92l-.01.14a4.66 4.66 0 0 1-3.99 4.45c-1.93.27-3.9.27-5.82 0a4.66 4.66 0 0 1-4-4.45L3.5 6.03zm14.2 8.26h.88c.68 0 1.23-.54 1.25-1.2l.1-3c.02-.71-.54-1.3-1.25-1.3h-.78z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.75 3.25c1.85 0 3.55.23 4.82.62.62.2 1.19.44 1.61.75.4.3.82.75.82 1.38s-.41 1.09-.82 1.38c-.42.31-.99.56-1.61.75-1.27.39-2.97.62-4.82.62s-3.55-.23-4.82-.62c-.62-.2-1.19-.44-1.61-.75-.4-.3-.82-.75-.82-1.38s.41-1.09.82-1.38c.42-.31.99-.56 1.61-.75 1.27-.39 2.97-.62 4.82-.62m0 1.5c-1.74 0-3.29.22-4.38.55q-.81.27-1.17.53L5.02 6q.02.05.18.17.36.27 1.17.53c1.1.33 2.64.55 4.38.55s3.29-.22 4.38-.55q.81-.27 1.17-.53.15-.12.18-.17l-.18-.17a4 4 0 0 0-1.17-.53 16 16 0 0 0-4.38-.55" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugRegularDuotone.displayName = 'CoffeeMugRegularDuotone';

// Triple export pattern (lucide-react style)
export { CoffeeMugRegularDuotone, CoffeeMugRegularDuotone as CoffeeMugRegularDuotoneIcon, CoffeeMugRegularDuotone as SiCoffeeMugRegularDuotone };
export default CoffeeMugRegularDuotone;
export type { CoffeeMugRegularDuotoneProps };
