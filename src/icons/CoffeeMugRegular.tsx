import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugRegularProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugRegular = memo(
  forwardRef<SVGSVGElement, CoffeeMugRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 2.25c1.98 0 3.8.23 5.16.61q1.02.3 1.71.74c.4.27.85.72.88 1.34v.09l-.07 2.22h.75c1.56 0 2.8 1.29 2.75 2.84l-.1 3a2.75 2.75 0 0 1-2.75 2.66h-.94l-.03.96a4.75 4.75 0 0 1-4.02 4.54l-.18.02q-3.16.5-6.31 0l-.18-.02a4.75 4.75 0 0 1-4.03-4.54L3.25 5.03v-.1c.03-.62.47-1.06.88-1.33q.69-.44 1.71-.74c1.35-.38 3.18-.61 5.16-.61m6.19 4.52q-.47.2-1.03.37c-1.35.38-3.18.61-5.16.61s-3.8-.23-5.16-.61a8 8 0 0 1-1.03-.37l.33 9.89a3.25 3.25 0 0 0 2.75 3.1l.18.03c1.94.3 3.92.3 5.86 0l.18-.03a3.25 3.25 0 0 0 2.75-3.1zm1.25 7.48h.9c.67 0 1.22-.53 1.24-1.2l.1-3c.03-.71-.54-1.3-1.25-1.3h-.8zM11 3.75c-1.88 0-3.56.22-4.74.56a5 5 0 0 0-1.29.53q-.15.11-.19.16.04.05.19.16.39.27 1.29.53c1.18.34 2.86.56 4.74.56s3.56-.22 4.74-.56a5 5 0 0 0 1.3-.53l.18-.16-.19-.16a5 5 0 0 0-1.29-.53A18 18 0 0 0 11 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugRegular.displayName = 'CoffeeMugRegular';

// Triple export pattern (lucide-react style)
export { CoffeeMugRegular, CoffeeMugRegular as CoffeeMugRegularIcon, CoffeeMugRegular as SiCoffeeMugRegular };
export default CoffeeMugRegular;
export type { CoffeeMugRegularProps };
