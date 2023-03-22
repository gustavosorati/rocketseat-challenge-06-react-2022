import { styled } from "@/styles/stitches.config";
import NextImage from "next/image";

export const Container = styled('div', {
  width: '43px',
  height: '43px',
  background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
  borderRadius: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Image = styled(NextImage, {
  width: '40px',
  height: '40px',
  borderRadius: 999
})