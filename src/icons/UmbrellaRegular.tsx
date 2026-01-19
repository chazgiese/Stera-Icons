import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UmbrellaRegularProps = Omit<IconBaseProps, 'children'>;

const UmbrellaRegular = memo(
  forwardRef<SVGSVGElement, UmbrellaRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="umbrella" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v1.28c5.03.38 9 4.59 9 9.72a.75.75 0 0 1-1.38.41A2.8 2.8 0 0 0 18 12.25c-.52 0-.85.12-1.1.29q-.38.26-.77.87a.75.75 0 0 1-1.26 0 2.5 2.5 0 0 0-1.14-.8 5 5 0 0 0-.98-.29v7.18a1.75 1.75 0 1 0 3.5 0V19a.75.75 0 0 1 1.5 0v.5a3.25 3.25 0 0 1-6.5 0v-7.18q-.5.1-.98.29c-.57.23-.97.53-1.14.8a.75.75 0 0 1-1.26 0c-.27-.42-.5-.7-.77-.87a2 2 0 0 0-1.1-.29c-1.07 0-1.94.5-2.37 1.16A.75.75 0 0 1 2.25 13a9.75 9.75 0 0 1 9-9.72V2c0-.41.34-.75.75-.75m0 3.5a8.25 8.25 0 0 0-8.06 6.47q.94-.46 2.06-.47a3.4 3.4 0 0 1 2.57 1.1q.54-.39 1.13-.63c.72-.3 1.55-.47 2.3-.47a6.2 6.2 0 0 1 3.43 1.1q.28-.31.64-.56a3.4 3.4 0 0 1 1.93-.54q1.12.01 2.06.47A8.25 8.25 0 0 0 12 4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

UmbrellaRegular.displayName = 'UmbrellaRegular';

// Triple export pattern (lucide-react style)
export { UmbrellaRegular, UmbrellaRegular as UmbrellaRegularIcon, UmbrellaRegular as SiUmbrellaRegular };
export type { UmbrellaRegularProps };
