import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicOffRegularProps = Omit<IconBaseProps, 'children'>;

const MicOffRegular = memo(
  forwardRef<SVGSVGElement, MicOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.47 1.47c.3-.3.77-.3 1.06 0l12.25 12.25.09.08 2.74 2.75.1.1.01.01 4.81 4.81a.75.75 0 1 1-1.06 1.06l-4.4-4.4a8.7 8.7 0 0 1-4.32 1.59v1.53H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.53a8.75 8.75 0 0 1-8-8.72.75.75 0 0 1 1.5 0 7.25 7.25 0 0 0 11.24 6.05l-1.82-1.82A4.73 4.73 0 0 1 7.25 11V8.31L1.47 2.53a.75.75 0 0 1 0-1.06M8.75 11a3.25 3.25 0 0 0 4.27 3.08L8.75 9.81z" clipRule="evenodd" />
        <path fill="currentColor" d="M20 10.25c.41 0 .75.34.75.75 0 1.5-.38 2.92-1.05 4.15a.75.75 0 0 1-1.32-.71c.56-1.02.87-2.2.87-3.44 0-.41.34-.75.75-.75M12 1.25A4.75 4.75 0 0 1 16.75 6v5.05a.75.75 0 0 1-1.5 0V6a3.25 3.25 0 0 0-5.94-1.83.75.75 0 0 1-1.23-.85A4.8 4.8 0 0 1 12 1.25" />
    </IconBase>
  ))
);

MicOffRegular.displayName = 'MicOffRegular';

export { MicOffRegular };
export type { MicOffRegularProps };
