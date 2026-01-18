import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CardHolderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CardHolderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CardHolderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.8 3.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37V11a.75.75 0 0 0-.75-.75h-.75v-2H2.75v2H2a.75.75 0 0 0-.75.75V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM5.2 4.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52l-.02.8h18.5q0-.5-.02-.8a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8.5 10.25c.41 0 .75.34.75.75a2.75 2.75 0 1 0 5.5 0c0-.41.34-.75.75-.75H22c.41 0 .75.34.75.75v5q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H6q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-5c0-.41.34-.75.75-.75zM2.75 16c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h12c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59v-4.25h-5.07a4.25 4.25 0 0 1-8.36 0H2.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderRegularDuotone.displayName = 'CardHolderRegularDuotone';

export { CardHolderRegularDuotone };
export type { CardHolderRegularDuotoneProps };
