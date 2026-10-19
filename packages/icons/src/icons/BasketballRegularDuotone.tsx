import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BasketballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.41 3.4c-.3 1.55-.26 3.34.05 5.2q1.02-.27 2.1-.44c-.13-1.13.1-2.13.6-3q.52-.89 1.33-1.55.9.27 1.7.71-1.11.72-1.65 1.64c-.32.56-.5 1.23-.4 2.04 1.95-.1 3.97.1 5.95.66q.36.88.53 1.83c-1.98-.69-4.03-.98-6-.92.69 1.33 2 2.43 3.56 3.68q1.03.81 2.05 1.74-.3.8-.73 1.51c-.69-.7-1.49-1.34-2.32-2.02-1.61-1.3-3.44-2.74-4.24-4.77q-1.11.15-2.16.46c.9 3.69 2.74 7.36 4.91 9.76q-.76.36-1.6.57c-2.16-2.58-3.92-6.2-4.82-9.81q-.8.32-1.52.74.22.67.28 1.39c.08 1.33-.1 2.57-.26 3.72-.15 1.02-.28 1.98-.26 2.97q-.84-.51-1.55-1.19.08-1.05.24-2c.16-1.18.31-2.26.24-3.4q-.01-.3-.09-.59-1.52 1.14-2.57 2.68-.35-.95-.47-2 1.06-1.23 2.4-2.18c-.47-.74-1.14-1.4-1.9-1.92q.3-.76.7-1.44c1 .64 1.9 1.5 2.55 2.52q.9-.5 1.87-.88c-.32-1.79-.41-3.58-.2-5.22q.8-.33 1.68-.5" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballRegularDuotone.displayName = 'BasketballRegularDuotone';

// Triple export pattern
export { BasketballRegularDuotone, BasketballRegularDuotone as BasketballRegularDuotoneIcon, BasketballRegularDuotone as SiBasketballRegularDuotone };
export default BasketballRegularDuotone;
export type { BasketballRegularDuotoneProps };
