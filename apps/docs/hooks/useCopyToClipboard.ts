'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

export function useCopyToClipboard(resetDelay: number = 2000) {
  const [copied, setCopied] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copyToClipboard = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      // Restart the reset so a repeat copy keeps its feedback for the full delay
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(null), resetDelay);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }, [resetDelay]);

  const resetCopied = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setCopied(null);
  }, []);

  return { copied, copyToClipboard, resetCopied };
}
