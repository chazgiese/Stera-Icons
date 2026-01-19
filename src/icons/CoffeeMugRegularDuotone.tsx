import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoffeeMugRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugRegularDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-duotone" {...props}>
      <path fill="currentColor" d="M18.75 5.01v.02l-.39 11.68a4.75 4.75 0 0 1-4.03 4.54l-.18.02q-3.15.5-6.3 0l-.19-.02a4.75 4.75 0 0 1-4.02-4.54L3.25 5.03V5c0 .65.46 1.1.88 1.39q.3.2.68.37l.33 9.89a3.25 3.25 0 0 0 2.75 3.1l.18.03c1.94.3 3.92.3 5.86 0l.18-.03a3.25 3.25 0 0 0 2.75-3.1l.33-9.9q.38-.16.68-.36c.42-.28.87-.74.88-1.39" opacity={.4} />
        <path fill="currentColor" d="M19.43 7.25c1.56 0 2.8 1.29 2.75 2.84l-.1 3a2.75 2.75 0 0 1-2.75 2.66h-.94l.05-1.5h.9c.67 0 1.22-.53 1.24-1.2l.1-3c.03-.71-.54-1.3-1.25-1.3h-.8l.05-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M11 2.25c1.98 0 3.8.23 5.16.61q1.02.3 1.71.74c.42.28.88.74.88 1.4s-.46 1.12-.88 1.4q-.69.45-1.71.74c-1.35.38-3.18.61-5.16.61s-3.8-.23-5.16-.61a6 6 0 0 1-1.71-.74c-.42-.28-.88-.74-.88-1.4s.46-1.12.88-1.4q.69-.44 1.71-.74c1.35-.38 3.18-.61 5.16-.61m0 1.5c-1.88 0-3.56.22-4.74.56a5 5 0 0 0-1.29.53q-.15.11-.19.16.04.05.19.16.39.27 1.29.53c1.18.34 2.86.56 4.74.56s3.56-.22 4.74-.56a5 5 0 0 0 1.29-.53l.19-.16-.19-.16a5 5 0 0 0-1.29-.53A18 18 0 0 0 11 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugRegularDuotone.displayName = 'CoffeeMugRegularDuotone';

// Triple export pattern (lucide-react style)
export { CoffeeMugRegularDuotone, CoffeeMugRegularDuotone as CoffeeMugRegularDuotoneIcon, CoffeeMugRegularDuotone as SiCoffeeMugRegularDuotone };
export type { CoffeeMugRegularDuotoneProps };
